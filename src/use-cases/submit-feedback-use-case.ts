import { MailAdapter } from "../adaptares/mail-adapter";
import { FeedbacksRepository } from "../repositores/feedback-repository";

interface SubmitFeedbackUseCaseRequest {
    type:string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase {

    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter,
        
    ) {}

    async execute(request: SubmitFeedbackUseCaseRequest) {
        const { type, comment, screenshot } = request;

        if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
            throw new Error('Invalid screenshot format')
        }

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot,
        })

        await this.mailAdapter.sendMail({
            subject: 'Novo feedback',
            body: [
                `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
                `<p> Tipo de feedback: ${type}</p>`,
                `<p> Comentário: ${comment}</p>`,
                screenshot ? `<img src="${screenshot}" alt="screenshot" />` : ``,
                `</div>`,
            ].join('\n')
        });
    }
}
// import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
    const { body } = req;
    const { email, subject, message } = body;
    try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: `Athul,<athul.interval@gmail.com>`,
            subject: "hello",
            react: (
                <>
                    <h1>Hello</h1>
                    <p>Thank you for contacting us!</p>
                    <p>Hello</p>
                </>
            ),
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}

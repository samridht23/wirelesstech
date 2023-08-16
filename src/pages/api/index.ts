import { sendMail } from "../../lib/mailService"
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;
    switch (method) {
      case 'POST': {
        await sendMail({
          subject: 'TEST',
          toEmail: 'samridht23@gmail.com',
          otpText: 'THIS IS A TEST FOR MY MEDIUM USERS',
        });
        res.status(200).send('Success');
        break;
      }
      default:
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    res.status(400).json({
      error: 'Error sending Email',
    });
  }
};

export default handler;

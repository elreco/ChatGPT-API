import { ChatGPTAPIBrowser } from 'chatgpt'

const initChatGPT = async () => {
  const api = new ChatGPTAPIBrowser({
    email: process.env.OPENAI_EMAIL,
    password: process.env.OPENAI_PASSWORD
  })
  await api.initSession()
  return api
}

export default async function handler(req, res) {
  /* if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  } */

  const api = await initChatGPT()
  let response = await api.sendMessage("test")
  res.status(200).json(response.response)
}

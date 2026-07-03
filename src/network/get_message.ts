import { Content, setComment } from "@/data/comments"

export const getReviews = async () => {
  const baseUrl = import.meta.env.VITE_BASE_URL
  const user_id = import.meta.env.VITE_USER_ID || ''

  try {
    const res = await fetch(`${baseUrl}/get_messages?user_id=${user_id}`)
    const data = await res.json()
    if (res.status == 200) {
      console.log(data)
      const obj = new Content();
      obj.replaceContent = data
      setComment(data);
    }
  } catch (e) {
    console.error(e)
  }
}

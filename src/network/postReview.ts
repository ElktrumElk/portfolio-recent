interface Review {
  username: string
  email: string
  content: string
}
interface InnerReview {
  username: string
  email: string
  content: string
  user_id: string
}
export const leaveReview = async ({ username, email, content }: Review) => {
  const data:InnerReview = {
    email: email,
    username: username,
    content: content,
    user_id: import.meta.env.VITE_USER_ID || ''
  }

  const baseUrl = import.meta.env.VITE_BASE_URL
  try {
    const res = await fetch(`${baseUrl}/send_message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (res.status == 201) {
      const response_data = await res.json()
      console.log(response_data)
      alert('Reveiw sent successfully. You can refresh the browser to see your review.')
    } else {
      alert(`Unable to send review. Status:${res.status}, Message:${res.body}`)
    }
  } catch (e) {
    alert('An error occur while uploading your review')
    console.error('Error:', e)
  }
}

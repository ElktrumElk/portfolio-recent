import { useRerender } from '@/modules/render-vue'
import { getReviews } from '@/network/get_message'

interface content {
  id: number
  profile: string
  username: string
  content: string
}

export class Content {
  static comments: content[] = [
    {
      id: 1,
      profile: 'https://example.com',
      username: 'sarah_tech',
      content:
        'An incredible developer who delivered our project ahead of schedule and with flawless code.',
    },
    {
      id: 2,
      profile: 'https://example.com',
      username: 'james_design',
      content:
        'Fantastic communication throughout the entire process. Brought creative solutions to every problem.',
    },
    {
      id: 3,
      profile: 'https://example.com',
      username: 'elena_m',
      content:
        'Highly professional, efficient, and attentive to detail. A pleasure to collaborate with.',
    },
    {
      id: 4,
      profile: 'https://example.com',
      username: 'david_biz',
      content: 'Transformed our messy legacy code into a clean, scalable system. Exceptional work!',
    },
    {
      id: 5,
      profile: 'https://example.com',
      username: 'chloe_p',
      content:
        "Great problem-solving skills and a strong work ethic. Exceeded all our team's expectations.",
    },
    {
      id: 6,
      profile: 'https://example.com',
      username: 'marcus_v',
      content:
        'Reliable, talented, and quick to respond. Will definitely hire for our future development needs.',
    },
  ]

  set addContent(con: content) {
    Content.comments.push(con)
  }
  get getContent() {
    return Content.comments
  }

  set replaceContent(con: content[]) {
    Content.comments = con
  }
  loadComment = async () => {
    await getReviews()
  }
}

export const [comments, setComment] = useRerender<content[]>(Content.comments)

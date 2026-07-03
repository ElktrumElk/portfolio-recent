import { useRerender } from '@/modules/render-vue'
import { getReviews } from '@/network/get_message'

interface content {
  id: number
  profile: string
  username: string
  content: string
}

export class Content {
  static comments: content[] = []

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

export const [comments, setComment] = useRerender<content[]>(Content.comments);


import { Observable } from 'rxjs'
import $ from 'jquery'

const numbers = [1,2,3,4,5,6]

const numbers$ = Observable.from(numbers)

numbers$.subscribe(
  v => console.log(v),
  err => console.log(err),
  complete => console.log('completed')
)

const $posts = $('#posts')

const posts = [
  {
    title: 'the lord of the rings',
    body: 'this is post body'
  },
  {
    title: 'the shawshank redemption',
    body: 'this is post body'
  },
  {
    title: 'the godfater',
    body: 'this is post body'
  }
]

const posts$ = Observable.from(posts)

posts$.subscribe(
  post => {
    $posts.append(`
        <li>${post.title}</li>
      `)
  }
)

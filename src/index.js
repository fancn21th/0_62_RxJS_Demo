import { Observable } from 'rxjs'
import $ from 'jquery'

const source$ = new Observable(
  observer => {
    console.log('Creating Observable')
    observer.next('foo')
    observer.next('bar')
    observer.next('baz')

    observer.error(new Error('something bad happened!'))

    setTimeout(
      () => {
        observer.next('one last value')
        observer.complete()
      },
      2000
    )
  }
)

source$
.catch(err => Observable.of(err))
.subscribe(
  v => console.log(v),
  err => console.log(err),
  c => console.log('completed')
)

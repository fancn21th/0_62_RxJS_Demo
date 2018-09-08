import { Observable } from 'rxjs'
import $ from 'jquery'

const btn = $('#btn')

const btnStream$  = Observable.fromEvent(btn, 'click')

btnStream$.subscribe(
    e => console.log(e, 'Clicked'),
    err => console.log(err),
    () => console.log('Completed')
)

import { Observable } from 'rxjs'
import $ from 'jquery'

const btn = $('#btn')
const txt = $('#txt')

const btnStream$  = Observable.fromEvent(btn, 'click')
const txtStream$  = Observable.fromEvent(txt, 'keyup')

btnStream$.subscribe(
    e => console.log(e, 'Clicked'),
    err => console.log(err),
    () => console.log('Completed')
)

txtStream$.subscribe(
    e => console.log(e.currentTarget.value),
    err => console.log(err),
    () => console.log('Completed')
)

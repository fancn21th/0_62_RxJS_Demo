import { Observable } from 'rxjs'
import $ from 'jquery'

const output = $('#output')

const moveStream$  = Observable.fromEvent(document, 'mousemove')

moveStream$.subscribe(
    e => output.text(`X:${e.clientX}  Y:${e.clientY}`),
    err => console.log(err),
    () => console.log('Completed')
)

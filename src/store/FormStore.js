import {observable} from 'mobx';
export default class FormStore {
  @observable dataSelectInBra = [
    { value: 'ocean', label: 'Ocean'},
    { value: 'blue', label: 'Blue'},
    { value: 'purple', label: 'Purple'},
    { value: 'red', label: 'Red'},
    { value: 'orange', label: 'Orange'},
    { value: 'yellow', label: 'Yellow' },
    { value: 'green', label: 'Green' },
    { value: 'forest', label: 'Forest'},
    { value: 'slate', label: 'Slate'},
    { value: 'silver', label: 'Silver'},
    ]
}
import throttle from 'lodash.throttle';
import storage from './storage';
import { refs } from './refs';
console.log(refs.form);

let data = {};
const LOCALKEY = 'feedback-form-state'; 

refs.form.addEventListener('input', throttle(onSaveData, 500));
refs.form.addEventListener('submit', onSendData);

function onSaveData({target}) {
    const { name, value } = target;
    data[name] = value;
    storage.save(LOCALKEY, data);
}

function onLoadData() {
    const savedData = storage.load(LOCALKEY);
    if (savedData) {
        for (let el in savedData) {
            refs.form[el].value = savedData[el];
            data[el] = savedData[el];
        }
    }
}
onLoadData();
// fill all 

function onSendData(e) {
    e.preventDefault();
    if (!data.email || !data.message) {
        alert("Заповніть усі поля, будь ласка!");
        return;
    }

    refs.form.reset();
    console.log(data);
    data = {};
    storage.remove(LOCALKEY);
}

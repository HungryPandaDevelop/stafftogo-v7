import { required, minLength,mailCheck } from 'components/forms/validator';

export default function(){
  return {
    order: ["message",],
    message: { name: "message", label: "Сообщение", placeholder: "Напишите сообщение... ", type:"textarea",validate: [required,minLength,mailCheck]  },
  }
}
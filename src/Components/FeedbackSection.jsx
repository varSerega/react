import Button from "./Button/Button";
import { useState } from "react";

export default function FeedbackSection() {


    const [name, setName] = useState("");
    const [hasError, setHasError] = useState(false);
    const [reason, setReason] = useState("help");

    function handleNameChange(event) {
    setName(event.target.value);
    setHasError(!event.target.value.trim().length);
  }  

   function handleReasonChange(event) {
    setReason(event.target.value);
  }  
    
    return (
        <section>
            <h1> Обратная связь</h1>
            <form>
                <label htmlFor="name">Ваше имя</label>
                <input type="text" id = "name"
                  className="control" 
                  value={name}
                   onChange={handleNameChange}
                   style={{
                    border: hasError ?  "1px solid red": null,
                   }}
                   />
                 <label htmlFor="reason">Причина</label>
                <select name="reason" id="reason" className="control" value={reason} onChange={handleReasonChange}>
                    <option value="error">Ошибка</option>
                    <option value="help">Помощь</option>
                    <option value="suggest">Согласие</option>
                </select>

                <pre>
                    Name:{name}
                </pre>
                <pre>
                    Reason:{reason}
                </pre>
                <Button 
                disabled = {hasError}
                isActive={!hasError}
                type="submit">Отправить</Button>
            </form>
        </section>
    )}
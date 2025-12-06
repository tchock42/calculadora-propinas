import { Dispatch, SetStateAction } from "react"
const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
]

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>
    tip: number
}

const TipPercentageForm = ({setTip, tip}: TipPercentageFormProps) => {

    return (
        <div>
            <h3 className="font-black text-2xl">Propina:</h3>

            <form>
                {tipOptions.map(tipOption =>(                           // se crea variable temporal tipOption
                    <div key={tipOption.id} className="flex gap-2">
                        <label htmlFor={tipOption.id}>{tipOption.label}</label>
                        <input 
                            type="radio"            // tipo de input
                            id={tipOption.id}             // se asocia con el for del label
                            name="tip"              // el name asociado
                            value={tipOption.value}       // con el value
                            onChange={e => setTip(+e.target.value)}
                            checked = {tipOption.value === tip}             //si el valor del input es igual al que seleccionó el usuario, lo checa
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}

export default TipPercentageForm

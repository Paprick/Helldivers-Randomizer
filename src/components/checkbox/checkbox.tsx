import { VscGrabber } from "react-icons/vsc"

export const Checkbox = ({ checked, onChange, label, highlighted }: { checked: boolean, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, label: string, highlighted?: boolean}) => {

    return(
        <label className="cursor-pointer flex flex-row items-center relative select-none">
            <input name={label} checked={checked} onChange={onChange} type="checkbox" className="w-5 h-5 opacity-0 pointer-events-none absolute"/>
            <div className={`transition-all duration-200 relative w-16 h-8 border-2 box-border mr-2 ${checked ? 'border-amber-300 hover:border-amber-300' : 'border-neutral-700 hover:border-amber-50'}`}>
                <div className={`flex flex-col items-center justify-center transition-all duration-200 w-8 h-full absolute ${checked ? 'bg-amber-300 left-1/2' : 'bg-neutral-700 left-0'}`}>
                    <VscGrabber size={'1.3rem'} className={`transition-all duration-200 ${checked ? 'text-neutral-700' : ''}`}/>
                </div>
            </div>
            <div className={`${highlighted && checked ? 'text-amber-300' : ''}`}>{label}</div>
        </label>
    )
}
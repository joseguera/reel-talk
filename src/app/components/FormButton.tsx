type ButtonProps = {
    children: string
  }


export default function FormButton(props:ButtonProps) {
  return (
    <div>
        <button className="w-64 h-12 p-2.5 rounded-lg border-2 border-[#FFFFFFEB] gap-2.5">{props.children}</button>
    </div>
  )
}

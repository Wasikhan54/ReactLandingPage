function Button({lable ,txtColor , bgcolor,padding}) {

    return(
        <button className={` ${txtColor ? txtColor : 'text-black' } ${ bgcolor ? bgcolor : 'bg-purple-400'}  border border-blue-600 m-3 px-3 py-1 rounded-md`}>{lable}</button>
    )
    
}
export default Button
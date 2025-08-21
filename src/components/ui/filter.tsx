import RoundedButton from "./roundedButton"

const buttonLabels = [
    "Всё", "Бассейны", "Сауны", "Дорожки Кнейпа",
    "Соляные комнаты", "Души впечатлений", "Хамамы",
    "Массажные кабинеты", "Инфракрасные кабины",
    "Ледогенераторы", "Сауны кроксен", "Травяная сауна"
]

const Filter = ({ className = '' }) => {
    return (
        <div className={`${ className } flex flex-wrap gap-3 w-full pt-12 2xl:ml-auto 2xl:max-w-[700px] sm:p-0 p-3`}>
          {buttonLabels.map((label, index) => (
            <RoundedButton
              key={index}
              className={`px-4 py-2 font-normal w-auto text-base rounded-full 2xl:flex-auto 2xl:text-xl 2xl:w-auto ${
                index === 0
                  ? "bg-[#687C96] text-white border border-[#687C96]"
                  : ""
              }`}
            >
              {label}
            </RoundedButton>
          ))}
        </div>
    )
}

export default Filter
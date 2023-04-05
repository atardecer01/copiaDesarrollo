'use client';
import ButtonBack from "../components/buttonBack";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";
import { setLastInterface, setSessionTime } from "../features/answers/answersSlice";

export default function Time() {
      
  const router = useRouter();

  const dispatch = useDispatch();

  const oldInterface = useSelector(state => state.answers.lastInterface);

  const changeInterface = () => {
    if (oldInterface != '/SetBook') {
      router.push('/');
    }
    else {
      router.push(oldInterface);
    }
    dispatch(setLastInterface('/SetTime'));
  }

  return (
    <>
      <div className="flex justify-start mt-10 ml-8">
        <ButtonBack texto={'Volver'} onClick={() => {changeInterface();}} />
      </div>
      <section className="flex flex-col items-center ">
        <h1 className="mt-15 mb-7 font-bold w-auto text-5xl">¿Cuánto tiempo vas a estudiar?</h1>
        <div className="w-96 mb-12 h-px border border-t border-solid border-gray-line p-0 mx-auto"></div>
        <select className="mt-5 mb-10 bg-white focus:outline-none text-sky-blue font-bold py-2 px-4 rounded-xl text-xl border w-80 border-blue-text-button h-12 shadow-sm shadow-purple-text" onChange={e => dispatch(setSessionTime(+e.target.value))}>
          <option value="1">1 hora</option>
          <option value="2">2 horas</option>
          <option value="3">3 horas</option>
          <option value="4">4 horas</option>
          <option value="5">5 horas</option>
        </select>
        <ButtonBack texto='Continuar' onClick={()=> {router.push('/PersonalTime');}} />
      </section>
    </>
  );
}
import { useEffect, useRef, useState } from 'react';
import * as S from './styles'
import { FaCoffee, FaHistory, FaPlay, FaClock } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { MdTimer } from "react-icons/md";
import beep from '../../../../assets/beep.mp3'
import { ModalPomodoro } from '../modal/ModalPomodoro';

export function Pomodoro(){
  const [initialSecond, setInitialSecond] = useState(1)
  const [initialBreak, setInitialBreak] = useState(1)

  const [cicle, setCicle] = useState(1)
  const [secondsLeft, setSecondsLeft] = useState();
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [isFinishing, setIsFinishing] = useState(false);

  const [isModal, setIsModal] = useState(false)

  const totalTime = isBreak ? initialBreak * 60 : initialSecond * 60;
  const initialProgress = 100 / totalTime;

  const [progress, setProgress] = useState(0)

	const audioRef = useRef()

  useEffect(() => {
    let intervalId
    if (cicle > 0 && isRunning) {
      intervalId = setInterval(() => {
        if (secondsLeft < 1) {
          if (!isBreak) {
            setIsBreak(true);
            setProgress(0)
            setSecondsLeft(initialBreak * 60)
          } else {
            setCicle((prevCount) => prevCount - 1);
            setProgress(0)
            setIsBreak(false);
						cicle > 0 && setSecondsLeft(initialSecond * 60)
          }
        } else {
          setSecondsLeft((prevSeconds) => prevSeconds - 1);
          setProgress((prevProgress) => prevProgress + initialProgress);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, secondsLeft, cicle, isBreak, initialBreak, initialSecond]);

useEffect(() => {
	setSecondsLeft( initialSecond * 60)
	return
},[initialSecond])



useEffect(() => {
	if(secondsLeft <= 4)  {
		setIsFinishing(true)
		audioRef.current.play()
	}else{
		setIsFinishing(false)
	}
	return
},[secondsLeft, audioRef])


  const startRunnig = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setProgress(0)
    setIsRunning(false);
    setIsBreak(false);
    setCicle(cicle)
    setSecondsLeft(initialSecond * 60)
		audioRef.current.pause()
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

    return(
    <S.PomodoroApp> 
        <S.Status>
            <S.StatusStudy isRunning={isRunning} isBreak={isBreak}>
                <MdTimer />
                <span>Estudando</span>
            </S.StatusStudy>
            <S.StatusBreak isBreak={isBreak}>
            <FaCoffee />
                <span>Pausa</span>
            </S.StatusBreak>
        </S.Status>
        <S.TimerCard>
            {cicle > 0 
              ? <>	
                  <S.Timer 
                    isFinishing= {isFinishing}
                  > 
                    {formatTime(secondsLeft)}
                  </S.Timer> 
                </>
              : <S.Timer isRunning={isRunning}>Parabéns! 🏆 </S.Timer>	
            }
            <S.TimerBar >
                <S.TimerProgress 
                  progress={progress}
                  isFinishing={isFinishing}
                />
            </S.TimerBar>
        </S.TimerCard>
        <S.Controls>
            <S.SecondButton onClick={() => resetTimer()}>
              <FaHistory />
            </S.SecondButton>
            {!isRunning 
                ? <S.PrimaryButton onClick={startRunnig}>
										<FaPlay /> 
										<span>Iniciar</span>
									</S.PrimaryButton>
								:	<S.PrimaryButton  onClick={pauseTimer}>
										<FaPlay /> 
										<span>Pausa</span>
									</S.PrimaryButton>
            }
            <S.SecondButton onClick={() => setIsModal(true)}>
              <FiSettings />
            </S.SecondButton>
            
        </S.Controls>
        <S.CiclosWrapper>
          Ciclos Restantes  <div>{cicle}</div>
        </S.CiclosWrapper>
         
				<audio ref={audioRef} src={beep} />
        <ModalPomodoro
          setInitialSecond={setInitialSecond}
          setInitialBreak={setInitialBreak}
          isModal={isModal}
          setIsModal={setIsModal}
          resetTimer={resetTimer}
          cicle={cicle} 
          setCicle={setCicle}
        />
    </S.PomodoroApp>
    )
}
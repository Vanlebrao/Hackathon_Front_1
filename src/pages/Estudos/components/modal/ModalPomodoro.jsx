import { FaXbox,} from "react-icons/fa";
import * as S from './styles'
import { useState } from "react";

export function ModalPomodoro({
  setInitialSecond, 
  setInitialBreak,
  isModal,
  setIsModal,
  resetTimer,
  setCicle
}){

    const [minutes, setMinutes] = useState(1)
    const [breaks, setBreaks] = useState(1)
    const [steps, setSteps] = useState(1)

    function handleMinutes(e){
      e.preventDefault();
      setMinutes(e.target.value)
    }

    function handleBreak(e){
      e.preventDefault();
      setBreaks(e.target.value)
    }

    function handleSteps(e){
      e.preventDefault();
      setSteps(e.target.value)
    }

    function handleSearch() {
      const minutesToStudy = Math.max(1, Math.floor(minutes / 60));
      const minutesForBreak = Math.max(1, Math.floor(breaks / 60));
      setIsModal(false)
      resetTimer();
      setInitialSecond(minutesToStudy);
      setInitialBreak(minutesForBreak);
      setCicle(steps)
    }
    

    return(
      <>
      {isModal &&
        <S.ModalContainer>
          <S.ModalWrapper>
            <S.ModalHeader>
                <span>
                  Configuracoes Pomodoro
                </span>
                <FaXbox />
            </S.ModalHeader>
            <S.ModalContent>
              <S.InputWrapper>
                <S.InputLabel>
                  Tempo Estudo
                  <S.Value>
                    {Math.floor(minutes / 60)}
                  </S.Value>
                </S.InputLabel>
               
                <S.Input 
                  type="range" 
                  min={1} 
                  max={1500}
                  value={minutes}
                  onChange={(e) => handleMinutes(e)}
                />
              </S.InputWrapper>
              <S.InputWrapper>
                <S.InputLabel>
                  <span>Tempo Pausas</span>
                  <S.Value>
                    {Math.floor(breaks / 60)}
                  </S.Value>
                </S.InputLabel>
                
                <S.Input 
                  type="range" 
                  min={1} 
                  max={650}
                  value={breaks}
                  onChange={(e) => handleBreak(e)}
                />
              </S.InputWrapper>
              <S.InputWrapper>

                  <S.InputLabel>
                    Ciclos
                    <S.Value>
                      {Math.floor(steps)}
                    </S.Value>
                  </S.InputLabel>
                <S.Input 
                  type="range" 
                  min={1} 
                  max={4}
                  value={steps}
                  onChange={(e) => handleSteps(e)}
                />
              </S.InputWrapper>

              <S.Button 
                onClick={() => handleSearch()}>
                  Confirme
              </S.Button>
            </S.ModalContent>
          </S.ModalWrapper> 
        </S.ModalContainer>
         }
      </>
    )
}
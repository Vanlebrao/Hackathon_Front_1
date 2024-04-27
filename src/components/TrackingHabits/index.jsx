import { useState } from 'react';
import * as C from './styles';
import { theme } from '../../../theme';

export const TrackingHabits = () => {
    const [days, setDays] = useState(Array(31).fill(0));

    return (
        <C.Wrapper theme={theme.colors}>
            <C.Input theme={theme.colors}>
                <input type="text" placeholder="Digite o hábito #" />
            </C.Input>            
            <C.ContainerDays theme={theme.colors}>                                
                    {days.map((day, index) => (                
                        <C.Days key={index} theme={theme.colors}>
                            {index + 1}
                        </C.Days>                
                    ))} 
            </C.ContainerDays>   
        </C.Wrapper>
    );    
}
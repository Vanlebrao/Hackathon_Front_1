import { useEffect, useState } from "react";
import * as S from "./styles";

import { Habits } from "../../data/fakeDb";
import Habit from "../../components/Habit/Habit";

export const TrackingHabits = () => {
  const [habitList, setHabitList] = useState([]);
  useEffect(() => {
    const habitsStorage = localStorage.getItem("habits");
    setHabitList(habitsStorage);
  }, []);

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <div>
            <h3>Habitos</h3>
          </div>
          <div className="habits">
            {Habits.map((habit) => (
              <Habit key={habit.id} habitItem={habit} />
            ))}
          </div>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

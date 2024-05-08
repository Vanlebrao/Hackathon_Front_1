import React, { useState, useEffect } from "react";
import * as C from "./styles";
import { theme } from "../../../theme";
import { FaEdit, FaSave } from "react-icons/fa";
import { MdOutlineCancelPresentation } from "react-icons/md";

export default function Habit({ habitItem }) {
  const [habit, setHabit] = useState(habitItem);
  const [isEditing, setIsEditing] = useState(false);
  const [editedHabitName, setEditedHabitName] = useState(habitItem.habit);

  const handleDayClick = (dayId) => {
    const updatedDays = habit.days.map((day) => {
      if (day.id === dayId) {
        return {
          ...day,
          status: !day.status,
        };
      }
      return day;
    });

    setHabit({
      ...habit,
      days: updatedDays,
    });
  };

  const handleEditHabitName = () => {
    setIsEditing(true);
  };

  const handleSaveEditedHabitName = () => {
    setHabit({
      ...habit,
      habit: editedHabitName,
    });
    setIsEditing(false);
  };

  const handleCancelEditHabitName = () => {
    setIsEditing(false);
    setEditedHabitName(habit.habit);
  };

  const handleEditedHabitNameChange = (e) => {
    setEditedHabitName(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habit));
  }, [habit]);

  return (
    <>
      <C.Wrapper theme={theme.colors}>
        <C.Title theme={theme.colors}>
          {isEditing ? (
            <>
              <input
                type="text"
                value={editedHabitName}
                onChange={handleEditedHabitNameChange}
              />
              <button onClick={handleSaveEditedHabitName}>
                <FaSave />
              </button>
              <button onClick={handleCancelEditHabitName}>
                <MdOutlineCancelPresentation />
              </button>
            </>
          ) : (
            <>
              <h4>{habit.habit}</h4>
              <button onClick={handleEditHabitName}>
                <FaEdit />
              </button>
            </>
          )}
        </C.Title>
        <C.ContainerDays theme={theme.colors}>
          {habit.days.map((habitDay, index) => (
            <C.Days
              key={index}
              theme={theme.colors}
              status={habitDay.status}
              onClick={() => handleDayClick(habitDay.id)}
            >
              {habitDay.day}
            </C.Days>
          ))}
        </C.ContainerDays>
      </C.Wrapper>
    </>
  );
}

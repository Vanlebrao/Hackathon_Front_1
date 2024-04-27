import { create } from "zustand";

const useCourseStore = create((set) => ({
    courseEdit: {
        course: '',
        module: '',
        lesson: '',
        time: '',
        weekday: ''
    },
    setCourseEdit: (arg) => set({courseEdit: arg})
}))

export default useCourseStore;
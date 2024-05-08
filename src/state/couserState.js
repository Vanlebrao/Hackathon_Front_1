import { create } from "zustand";

const useCourseStore = create((set) => ({
    courseEdit: {
        id: '',
        course: '',
        module: '',
        lesson: '',
        time: '',
        id_day: '',
        status: false
    },
    setCourseEdit: (arg) => set({courseEdit: arg})
}))

export default useCourseStore;
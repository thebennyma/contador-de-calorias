import { useMemo } from "react"
import { Activity } from "../type"
import CaloreDisplay from "./CaloreDisplay"

type CalorieTrakerProps = {
    activities: Activity[]
}

export default function CalorieTraker({ activities }: CalorieTrakerProps) {

    const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0), [activities])
    const caloriesBurned = useMemo(() => activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total, 0), [activities])
    const netCalories = useMemo(() => caloriesConsumed - caloriesBurned, [activities])

    return (
        <>
            <h2 className="text-4xl font-black text-white text-center">Resumen de Calorias</h2>
            <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
                <CaloreDisplay calories={caloriesConsumed} text="Consumidas" />
                <CaloreDisplay calories={caloriesBurned} text="Ejercicio" />
                <CaloreDisplay calories={netCalories} text="Diferencia" />
            </div>

        </>
    )
}

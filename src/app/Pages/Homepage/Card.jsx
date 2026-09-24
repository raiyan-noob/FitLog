import Image from "next/image";
import Link from "next/link";
import { FaClock, FaFire, FaStar } from "react-icons/fa";

const WorkoutCard = ({ workout }) => {

  const groups = Array.isArray(workout.muscleGroups) ? workout.muscleGroups : [workout.muscleGroups];

  return (
    <Link
      href={`/${workout.id}`}
      className=" h-100  flex flex-col bg-[#161616] border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-[#ccff00]/50 transition-colors"
    >
      <div className="relative h-65 w-full">
        <Image src={workout.image} alt={workout.name} fill className="object-cover" />
      
      </div>

      <div className="flex-1 p-4">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {groups.map((tag) => (
            <span key={tag} className="badge badge-sm bg-[#ccff00] text-black border-none font-semibold uppercase">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-display uppercase font-semibold text-sm mb-1 mt-3">{workout.name}</h3>
        <p className="text-gray-500 text-xs mb-3">{workout.equipment}</p>
        <div className="flex items-center gap-4 text-xs text-gray-400 mt-4">
          <span className="flex items-center gap-1"><FaClock className="text-[#ccff00]" /> {workout.duration} min</span>
          <span className="flex items-center gap-1"><FaFire className="text-[#ccff00]" /> {workout.caloriesBurned} kcal</span>
          <span className="flex items-center gap-1"><FaStar className="text-[#ccff00]" /> {workout.rating}</span>
        </div>
      </div>
    </Link>
  );
}
export default WorkoutCard;
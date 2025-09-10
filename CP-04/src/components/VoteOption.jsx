import { useState } from 'react'

export default function VoteOption({ id, label, onVote }) {
  // Controle de estado interno para mostrar se usuário votou nessa opção
  const [voted, setVoted] = useState(false)

  const handleClick = () => {
    if (!voted) {
      onVote(id)
      setVoted(true)
    }
  }

  return (
    <div className="bg-white p-6 rounded shadow-md flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">{label}</h2>
      <button
        onClick={handleClick}
        disabled={voted}
        className={`px-4 py-2 rounded text-white ${
          voted ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {voted ? 'Votado' : 'Votar'}
      </button>
    </div>
  )
}

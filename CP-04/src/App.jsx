import { useState } from 'react'
import './App.css'
import VoteOption from './components/VoteOption.jsx'
import VoteSummary from './components/VoteSummary.jsx'

const options = [
  { id: 1, label: 'Option A' },
  { id: 2, label: 'Option B' },
  { id: 3, label: 'Option C' },
]

export default function App() {
  // Estado com votos totais por opção
  const [votes, setVotes] = useState({})

  // Função para atualizar votos vindos do VoteOption
  const handleVote = (id) => {
    setVotes(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }))
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Contador de Votos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {options.map(option => (
          <VoteOption
            key={option.id}
            id={option.id}
            label={option.label}
            onVote={handleVote}
          />
        ))}
      </div>

      <VoteSummary votes={votes} options={options} />
    </div>
  )
}

export default function VoteOption({ id, label, onVote }) {
  const handleClick = () => {
    onVote(id)
  }

  return (
    <div className="bg-white p-6 rounded shadow-md flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">{label}</h2>
      <button
        onClick={handleClick}
        className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
      >
        Votar
      </button>
    </div>
  )
}

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("pt-br", {
    day: "2-digit",
    month: "short",
    hour: '2-digit',
    minute: '2-digit'
  })
}

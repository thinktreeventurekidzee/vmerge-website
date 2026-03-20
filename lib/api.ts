export const getInfluencers = async () => {
  try {
    const res = await fetch('http://localhost:8080/api/influencers')
    return await res.json()
  } catch (error) {
    console.error('Error fetching influencers:', error)
    return []
  }
}
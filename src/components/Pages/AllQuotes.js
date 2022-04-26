import { useEffect } from "react"
import useHttp from "../../hooks/use-http"
import { getAllQuotes } from "../../lib/api"
import NoQuotesFound from "../Quotes/NoQuotesFound"
import QuoteList from "../Quotes/QuoteList"
import LoadingSpinner from "../UI/LoadingSpinner"

const AllQuotes = () => {
  const { sendRequest, ...state } = useHttp(getAllQuotes, true)

  useEffect(() => {
    sendRequest()
  }, [sendRequest])

  const { status, data: loadedQuotes, error } = state

  if (status === 'pending') {
    return <div className='centered'>
      <LoadingSpinner />
    </div>
  }

  if (error) {
    return <div className='centered focused'>
      {error}
    </div>
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />
  }

  return <QuoteList quotes={loadedQuotes} />
}

export default AllQuotes
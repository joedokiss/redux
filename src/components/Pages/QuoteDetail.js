import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { useParams, Route } from 'react-router-dom'
import useHttp from "../../hooks/use-http";
import { getSingleQuote } from "../../lib/api";
import Comments from "../Comments/Comments";
import HighlightedQuote from "../Quotes/HighlightedQuote";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch()

  const { quoteId } = params

  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true)

  useEffect(() => {
    sendRequest(quoteId)
  }, [quoteId, sendRequest])

  if (status === 'pending') {
    return <div className="centered"><LoadingSpinner /></div>
  }

  if (error) {
    return <div className="centered">{error}</div>
  }

  if (!loadedQuote && !loadedQuote.id) {
    return <p>No quote is found!</p>
  }

  const { author, text } = loadedQuote

  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <HighlightedQuote text={text} author={author} />
      <Route path={`${match.path}`} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
}

export default QuoteDetail
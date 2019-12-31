import React from "react";
import data from "../../data"

const AiNews = (props) => {
	return(
		<div className="d-flex flex-column align-items-start justify-content-start w-100 pr-4 pl-1">
			<div className="w-100 border-bottom">
				<h5>AI News</h5>
			</div>
			{data.ai_news.map((news) => (
				<div className="d-flex flex-column align-items-start justify-content-start w-100 border-bottom pt-2 pb-2" key={news.id}>
					<span>{news.news}</span>
					<a href={news.twitter_link} target="_blank" rel="noopener noreferrer">Read more on Twitter</a>
				</div>
			))}
		</div>
	)
};

export default AiNews;

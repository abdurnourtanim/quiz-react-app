import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

const useQuestions = (videoID) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      // database related work
      const db = getDatabase();
      const questionsRef = ref(db, `quiz/${videoID}/questions`);
      const questionQuery = query(questionsRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        // request firebase database
        const snapshot = await get(questionQuery);

        setLoading(false);
        if (snapshot.exists()) {
          setQuestions((prevQuestions) => [
            ...prevQuestions,
            ...Object.values(snapshot.val()),
          ]);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchQuestions();
  }, [videoID]);

  return {
    questions,
    loading,
    error,
  };
};

export default useQuestions;

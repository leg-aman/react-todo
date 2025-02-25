import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ItemDetail() {
  const { id } = useParams();  // Extract id from the URL
  const [task, setTask] = useState(null);  // Initially null until the task is fetched
  const [isLoading, setIsLoading] = useState(true);  // Loading state for fetching data

  // Fetch task details when the component mounts or id changes
  useEffect(() => {
    const fetchTaskDetails = async () => {
      setIsLoading(true);  // Start loading state
      try {
        // Replace this with your Airtable API endpoint
        const response = await fetch(`https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}/${id}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setTask(data.fields);  // Store task details in the state
        } else {
          console.error('Failed to fetch task details');
        }
      } catch (error) {
        console.error('Error fetching task:', error);
      } finally {
        setIsLoading(false);  // End loading state
      }
    };

    fetchTaskDetails();
  }, [id]);  // Re-run the effect when the id changes

  if (isLoading) {
    return <p>Loading task details...</p>;
  }

  if (!task) {
    return <p>Task not found!</p>;  // Display message if the task doesn't exist
  }

  return (
    <>
      <h1>Task Detail</h1>
      <h4>{task.title}</h4>
      {/* You can display more task details here if needed */}
    </>
  );
}

export default ItemDetail;

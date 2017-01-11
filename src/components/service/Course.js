
export default {
    getPeriods: async function(course_id) {
        let result = null;
        try {
            result = await fetch('period.json', {
                credentials: "same-origin"
            });
            result = await result.json();
        } catch (e) {
            console.error(e);
        }
        
        (result) && (result = result.data);
        return result;
    }
}
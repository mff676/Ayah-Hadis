export const formatDate = (dateString) => {
    const options = {  month: 'short', day: '2-digit', year: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('id-ID', options);
    return formattedDate;
}    
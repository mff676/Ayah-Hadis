export const formatDate = (dateString, withDay = false) => {
    const options = { month: 'short', day: '2-digit', year: 'numeric' };

    if (withDay) {
      options.weekday = 'long';
    }
        const formattedDate = new Date(dateString).toLocaleDateString('id-ID', options);
    return formattedDate;
}    
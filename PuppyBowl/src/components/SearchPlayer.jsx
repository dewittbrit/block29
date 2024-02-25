// import React from "react";

// const PlayerSearch = ({searchQuery, setSearchQuery }) => {
//     return (
//         <input
//             type="text"
//             placeholder="Search players..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             style={{marginBottom: '20px', padding: '10px', width: '300px', fontSize: '16px'}}
//         />
//     );
// };

// export default PlayerSearch;

import React, { useState } from "react";

const PlayerSearch = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        onSearch(query);
    };

    return (
        <input
            type="text"
            placeholder="Search players..."
            value={searchQuery}
            onChange={handleSearch}
            style={{ marginBottom: '20px', padding: '10px', width: '300px', fontSize: '16px' }}
        
        
        />
    );
};

export default PlayerSearch;
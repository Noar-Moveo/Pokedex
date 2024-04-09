import { RecentSearchesProps }  from '../data/types';
import { RecentSearchItem, RecentSearchList, DeleteButton } from '../styles/SearchStyles';

//const MAX_RECENT_SEARCHES = 4;

const RecentSearches: React.FC<RecentSearchesProps> = ({ searches, onDelete, onSelect }) => {
    return (
      <RecentSearchList>
        {searches.map((search, index) => (
          <RecentSearchItem key={index} onClick={() => onSelect(search)}>
            {search}
            <DeleteButton onClick={(e) => {
              e.stopPropagation(); 
              onDelete(search);
            }}>X</DeleteButton>
          </RecentSearchItem>
        ))}
      </RecentSearchList>
    );
  };
  
  export default RecentSearches;
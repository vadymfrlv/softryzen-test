import { PageTitle } from 'components/PageTitle/PageTitle';
import { ActionBtn } from 'components/ActionBtn/ActionBtn';
import { BaseBox } from 'components/Box/Box';
import { FilterBy } from 'components/Filter/Filter';
import { SortBy } from 'components/Sorter/Sorter';

const HomePage = () => {
  return (
    <>
      <BaseBox display="flex" justifyContent="space-between" alignItems="center">
        <PageTitle title="My events" />
        <ActionBtn description="Add new event" isLink to="createEvent" />
        <FilterBy />
        <SortBy />
      </BaseBox>
    </>
  );
};

export default HomePage;

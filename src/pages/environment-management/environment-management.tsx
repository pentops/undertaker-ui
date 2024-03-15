import React, { useMemo } from 'react';
import { useListEnvironments } from '@/data/api';
import { useErrorHandler } from '@/lib/error.ts';
import { O5DeployerV1EnvironmentState } from '@/data/types';
import { CustomColumnDef, DataTable, TableRow } from '@/components/data-table/data-table.tsx';
import { UUID } from '@/components/uuid/uuid.tsx';
import { environmentStatusLabels } from '@/data/types/ui/environment.ts';
import { NutritionFact } from '@/components/nutrition-fact/nutrition-fact.tsx';
import { buildEnvironmentCustomVariables, buildEnvironmentProvider } from '@/pages/environment/build-facts.tsx';
import { useTableState } from '@/components/data-table/state.ts';

const columns: CustomColumnDef<O5DeployerV1EnvironmentState>[] = [
  {
    header: 'ID',
    accessorKey: 'environmentId',
    cell: ({ getValue }) => {
      const value = getValue<string>();
      return value ? <UUID canCopy short to={`/environment/${value}`} uuid={value} /> : null;
    },
  },
  {
    header: 'Full Name',
    accessorFn: (row) => row.config?.fullName,
  },
  {
    header: 'Status',
    align: 'right',
    id: 'status',
    accessorFn: (row) => environmentStatusLabels[row.status!] || '',
    filter: {
      type: {
        select: {
          isMultiple: true,
          options: Object.entries(environmentStatusLabels).map(([value, label]) => ({ value, label })),
        },
      },
    },
  },
];

function renderSubRow({ row }: TableRow<O5DeployerV1EnvironmentState>) {
  return (
    <div className="flex flex-col gap-4">
      <NutritionFact vertical label="Full Name" value={row.original.config?.fullName} />
      <NutritionFact label="CORS Origins" value={row.original.config?.corsOrigins?.join('\n')} />
      <NutritionFact label="Trust JWKS" value={row.original.config?.trustJwks?.join('\n')} />

      <h4>Provider</h4>
      {buildEnvironmentProvider(row.original.config?.provider)}

      <h4>Variables</h4>
      {buildEnvironmentCustomVariables(row.original.config?.vars)}
    </div>
  );
}

export function EnvironmentManagement() {
  const { sortValues, setSortValues, psmQuery, setFilterValues, filterValues } = useTableState();
  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useListEnvironments({ query: psmQuery });
  useErrorHandler(error, 'Failed to load environments');

  const flatData = useMemo(() => {
    if (!data?.pages) {
      return [];
    }

    return data.pages.reduce((acc, page) => {
      if (page?.environments) {
        return [...acc, ...page.environments];
      }

      return acc;
    }, [] as O5DeployerV1EnvironmentState[]);
  }, [data?.pages]);

  return (
    <div className="w-full">
      <div className="flex items-end place-content-between w-full pb-4">
        <h1 className="text-2xl">Environment Management</h1>
      </div>

      <DataTable
        getRowCanExpand
        columns={columns}
        controlledColumnSort={sortValues}
        data={flatData}
        filterValues={filterValues}
        onColumnSort={setSortValues}
        onFilter={setFilterValues}
        pagination={{ hasNextPage, fetchNextPage, isFetchingNextPage }}
        renderSubComponent={renderSubRow}
        showSkeleton={Boolean(data === undefined || isLoading || error)}
      />
    </div>
  );
}

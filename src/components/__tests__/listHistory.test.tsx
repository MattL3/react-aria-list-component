import { render, screen } from '@testing-library/react';
import React from 'react';
import ListHistory from '../listHistory';
import { MyListData, Key } from '../../types';
import { Selection } from 'react-stately';

const localListData: MyListData = {
  ListData: {
    items: [
      { name: 'Aardvark', id: 0, isDeleted: false },
      { name: 'Kangaroo', id: 1, isDeleted: false },
      { name: 'Snake', id: 2, isDeleted: false },
    ],
    selectedKeys: 'all',
    setSelectedKeys: function (keys: Selection): void {
      throw new Error('Function not implemented.');
    },
    filterText: '',
    setFilterText: function (filterText: string): void {
      throw new Error('Function not implemented.');
    },
    getItem: function (
      key: Key
    ): { name: string; id: number; isDeleted: boolean } | undefined {
      throw new Error('Function not implemented.');
    },
    insert: function (
      index: number,
      ...values: { name: string; id: number; isDeleted: boolean }[]
    ): void {
      throw new Error('Function not implemented.');
    },
    insertBefore: function (
      key: Key,
      ...values: { name: string; id: number; isDeleted: boolean }[]
    ): void {
      throw new Error('Function not implemented.');
    },
    insertAfter: function (
      key: Key,
      ...values: { name: string; id: number; isDeleted: boolean }[]
    ): void {
      throw new Error('Function not implemented.');
    },
    append: function (
      ...values: { name: string; id: number; isDeleted: boolean }[]
    ): void {
      throw new Error('Function not implemented.');
    },
    prepend: function (
      ...values: { name: string; id: number; isDeleted: boolean }[]
    ): void {
      throw new Error('Function not implemented.');
    },
    remove: function (...keys: Key[]): void {
      throw new Error('Function not implemented.');
    },
    removeSelectedItems: function (): void {
      throw new Error('Function not implemented.');
    },
    move: function (key: Key, toIndex: number): void {
      throw new Error('Function not implemented.');
    },
    moveBefore: function (key: Key, keys: Iterable<Key>): void {
      throw new Error('Function not implemented.');
    },
    moveAfter: function (key: Key, keys: Iterable<Key>): void {
      throw new Error('Function not implemented.');
    },
    update: function (
      key: Key,
      newValue: { name: string; id: number; isDeleted: boolean }
    ): void {
      throw new Error('Function not implemented.');
    },
  },
};

function testFunc() {
  console.log('pressed');
}

test('renders list display element', () => {
  render(<ListHistory ListData={localListData.ListData} />);
  const linkElement = screen.getByText('Aardvark');
  expect(linkElement).toBeInTheDocument();
});

import { HStack, IconButton } from "@chakra-ui/react";
import { range } from "lodash";
import { Component } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IPaginationProps, PaginationItemProps } from "../types";

export class Pagination extends Component<IPaginationProps> {
  // public isFirstPage = this.props.currentPage === 1;
  // public isLastPage = this.props.currentPage === this.props.totalPage;

  public onChangePage = (page: number) => {
    this.props.onChange(page);
  };

  public PaginationItem({ label, isActive, isDisabled, onPageChange }: PaginationItemProps) {
    return (
      <IconButton
        size="sm"
        aria-label={`Go to page ${label}`}
        isDisabled={isDisabled}
        _hover={{ bg: "blue.500", color: "white" }}
        onClick={onPageChange}
        icon={<> {label} </>}
        bg={isActive ? "blue.500" : undefined}
        color={isActive ? "white" : undefined}
      />
    );
  }

  public renderPaginationItems() {
    const pageNumbersToShow = 5;
    let startPage = this.props.currentPage - Math.floor(pageNumbersToShow / 2);
    if (startPage < 1) {
      startPage = 1;
    }
    let endPage = startPage + pageNumbersToShow - 1;
    if (endPage > this.props.totalPage) {
      endPage = this.props.totalPage;
      startPage = endPage - pageNumbersToShow + 1;
      if (startPage < 1) {
        startPage = 1;
      }
    }

    const pages = range(startPage, endPage + 1);

    const showLeftEllipsis = startPage > 2;
    const showRightEllipsis = endPage < this.props.totalPage - 1;

    const paginationItems = [
      <this.PaginationItem
        key="prev"
        label={<FiChevronLeft />}
        isDisabled={this.props.currentPage === 1}
        onPageChange={() => this.onChangePage(this.props.currentPage - 1)}
      />,
      startPage > 1 && (
        <this.PaginationItem key={1} label={1} onPageChange={() => this.onChangePage(1)} />
      ),
      showLeftEllipsis && <IconButton aria-label="..." size={'sm'} icon={<>...</>} key="leftellipsis" isDisabled />,
      pages.map((page) => (
        <this.PaginationItem
          key={page}
          label={page}
          isActive={this.props.currentPage === page}
          onPageChange={() => this.onChangePage(page)}
        />
      )),
      showRightEllipsis && <IconButton aria-label="..." size={'sm'} icon={<>...</>} key="rightellipsis" isDisabled />,
      endPage < this.props.totalPage && (
        <this.PaginationItem
          key={this.props.totalPage}
          label={this.props.totalPage}
          onPageChange={() => this.onChangePage(this.props.totalPage)}
        />
      ),
      <this.PaginationItem
        key="next"
        label={<FiChevronRight />}
        isDisabled={this.props.currentPage === this.props.totalPage}
        onPageChange={() => this.onChangePage(this.props.currentPage + 1)}
      />,
    ];

    return paginationItems;
  }

  public render() {
    return (
      <HStack mt={3} mb={3}>{this.renderPaginationItems()}</HStack>
    )
  }
}
package models

import (
	"gorm.io/gorm"
	"time"
)

type Blog struct {
	Id         uint           `json:"id" gorm:"primaryKey"`
	Title      string         `json:"title"`
	Post       string         `json:"post"`
	Image      string         `json:"image"`
	CreateAt   time.Time      `json:"create_at"`
	UpdateAt   time.Time      `json:"update_at"`
	DeletedAt  gorm.DeletedAt `json:"deleted_at" gorm:"index"`
	Categories []Category     `gorm:"many2many:blog_categories"`
	Tags       []Tag          `gorm:"many2many:blog_tags"`
}

type Tag struct {
	gorm.Model
	TagName string `gorm:"unique" json:"tag"`
	Posts   []Blog `gorm:"many2many:blog_tags;"`
}

type Category struct {
	gorm.Model
	CategoryName string `gorm:"unique" json:"category"`
	Blogs        []Blog `gorm:"many2many:blog_categories;"`
}

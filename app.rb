#!/bin/env ruby

require 'rubygems'
require 'sinatra'
require 'haml'

get '/stylesheets/style.css' do
  content_type 'text/css', :charset => 'utf-8'
  sass :style
end

get '/' do
  haml :index
end

get '/basics' do
  haml :basics
end